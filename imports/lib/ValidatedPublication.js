/* eslint-disable no-param-reassign */
/* eslint-disable new-cap */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import { Meteor } from 'meteor/meteor';
import { ValidationError } from 'meteor/mdg:validation-error';
import { check, Match } from 'meteor/check';
import { _ } from 'meteor/underscore';

// TODO: eventually meteor dev group will create this.  Obviously use that in
// favor of this in the future.
// TODO: add query option that is also usable later.
// TODO: add sort option that will only be applied to queries on client side
// This is harder to accomplish with composites.  Know what queries where.

export default class {
  constructor(options) {
    // Default to no mixins
    check(options.name, String);

    // connection argument defaults to Meteor, which is where Methods are defined on client and
    // server
    options.connection = options.connection || Meteor;

    // Allow validate: null shorthand for methods that take no arguments
    if (options.validate === null) {
      options.validate = () => {};
    }

    if (!options.composite) {
      options.composite = false;
    }

    check(options, Match.ObjectIncluding({
      name: String,
      composite: Boolean,
      validate: Function,
      run: Function,
      connection: Object,
    }));

    // Attach all options to the ValidatedPublication instance
    _.extend(this, options);

    const publication = this;
    if (Meteor.isServer) {
      if (this.composite) {
        this.connection.publishComposite(options.name, function (args) {
          // Silence audit-argument-checks
          check(args, Match.Any);
          const pubInvocation = this;

          return publication._execute(pubInvocation, args);
        });
      } else {
        this.connection.publish(options.name, function (args) {
          // Silence audit-argument-checks
          check(args, Match.Any);
          const pubInvocation = this;

          return publication._execute(pubInvocation, args);
        });
      }
    }
  }

  subscribe(args, callbacks) {
    // Accept calling with just a callbacks
    if (_.isFunction(args)) {
      callbacks = args;
      args = {};
    }

    try {
      return this.connection.subscribe(this.name, args, callbacks);
    } catch (err) {
      if (typeof callbacks === 'object') {
        // Get errors from the stub in the same way as from the server-side method
        callbacks.onStop(err);
      } else {
        // If there is not onStop callback, throw instead of silently failing;
        throw err;
      }
    }
  }

  _execute(pubInvocation, args) {
    pubInvocation = pubInvocation || {};

    // Add `this.name` to reference the Method name
    pubInvocation.name = this.name;

    try {
      const validateResult = this.validate.bind(pubInvocation)(args);
      if (typeof validateResult !== 'undefined') {
        throw new Meteor.Error(
          'Returning from validate doesn\'t do anything; perhaps you meant to throw an error?');
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        const matchError = new Match.Error(error.message);
        matchError.invalidKeys = error.invalidKeys;
        matchError.sanitizedError = error.sanitizedError;
        throw matchError;
      } else {
        throw error;
      }
    }

    return this.run.bind(pubInvocation)(args);
  }
}
