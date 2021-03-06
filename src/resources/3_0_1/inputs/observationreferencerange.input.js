const {
	GraphQLString,
	GraphQLList,
	GraphQLInputObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ObservationreferenceRange Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ObservationreferenceRange_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		low: {
			type: require('./quantity.input.js'),
			description:
				'The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3).',
		},
		high: {
			type: require('./quantity.input.js'),
			description:
				'The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3).',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/referencerange-meaning
		type: {
			type: require('./codeableconcept.input.js'),
			description:
				'Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/referencerange-appliesto
		appliesTo: {
			type: new GraphQLList(require('./codeableconcept.input.js')),
			description:
				'Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race.',
		},
		age: {
			type: require('./range.input.js'),
			description:
				'The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.',
		},
		_text: {
			type: require('./element.input.js'),
			description:
				"Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of 'Negative' or a list or table of 'normals'.",
		},
		text: {
			type: GraphQLString,
			description:
				"Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of 'Negative' or a list or table of 'normals'.",
		},
	}),
});
