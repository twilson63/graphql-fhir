const {
	GraphQLString,
	GraphQLList,
	GraphQLFloat,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');

/**
 * @name exports
 * @summary Count Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Count',
	description:
		'Base StructureDefinition for Count Type: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_value: {
			type: require('./element.schema.js'),
			description:
				'The value of the measured amount. The value includes an implicit precision in the presentation of the value.',
		},
		value: {
			type: GraphQLFloat,
			description:
				'The value of the measured amount. The value includes an implicit precision in the presentation of the value.',
		},
		_comparator: {
			type: require('./element.schema.js'),
			description:
				"How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is '<' , then the real value is < stated value.",
		},
		comparator: {
			type: CodeScalar,
			description:
				"How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is '<' , then the real value is < stated value.",
		},
		_unit: {
			type: require('./element.schema.js'),
			description: 'A human-readable form of the unit.',
		},
		unit: {
			type: GraphQLString,
			description: 'A human-readable form of the unit.',
		},
		_system: {
			type: require('./element.schema.js'),
			description:
				'The identification of the system that provides the coded form of the unit.',
		},
		system: {
			type: UriScalar,
			description:
				'The identification of the system that provides the coded form of the unit.',
		},
		_code: {
			type: require('./element.schema.js'),
			description:
				'A computer processable form of the unit in some unit representation system.',
		},
		code: {
			type: CodeScalar,
			description:
				'A computer processable form of the unit in some unit representation system.',
		},
	}),
});
