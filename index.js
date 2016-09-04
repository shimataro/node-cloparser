/**
 * Command Line Options Parser
 * Created by shimataro on 16/09/04.
 *
 * @module node-cloparser
 *
 * @function
 * @param {Object} default_options - default options; will be updated
 * @param {integer} (start_index) - start index in command line; default is 2
 * @returns {Object} parse result
 */
module.exports = (function(undefined)
{
	"use strict";

	return function(options, start_index)
	{
		if(start_index === undefined)
		{
			start_index = 2;
		}

		var extras = [];

		var args = process.argv.slice(start_index);
		for(var i = 0; i < args.length; i++)
		{
			parseArgumentString(options, extras, args[i]);
		}
		return extras;
	};

	/**
	 * parse argument string
	 * @param {Object} options - parse result; will be updated
	 * @param {Array} extras - extra options; will be updated
	 * @param {string} arg - argument string
	 */
	function parseArgumentString(options, extras, arg)
	{
		if(arg[0] === "-")
		{
			parseArgumentCharacters(options, arg);
		}
		else
		{
			extras.push(arg);
		}
	}

	/**
	 * parse argument characters
	 * @param {Object} options - options object; will be overwritten
	 * @param {string} arg - argument string
	 */
	function parseArgumentCharacters(options, arg)
	{
		// last parsed character
		var last_char = null;

		for(var i = 1; i < arg.length; i++)
		{
			var o = arg[i];
			if(o === "=")
			{
				if(last_char === null)
				{
					throw new SyntaxError("node-cloparser syntax error: " + arg);
				}
				options[last_char] = arg.slice(i + 1);
				return;
			}
			else
			{
				last_char = o;
				options[last_char] = true;
			}
		}
	}
})();
