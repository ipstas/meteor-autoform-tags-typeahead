import './tags-typeahead.html';

AutoForm.addInputType("tags", {
	template: "afTagsTypeahead",
	
	valueIn: function(value) {
		if(!value) {
			return '';
		}
		console.log('afTagsTypeahead valueIn:', value);
		return value.join(',');
	},
	
	valueOut: function() {
		if(!this.val()) {
			return '';
		}
		var tags = this.val().toLowerCase().replace(' ', '').split(',');

/*         var tagNames = _.map(tags, function(title){
				var tag = TagsUtil.findOrCreate(title);
				return tag.title;
		}); */
		var tagNames = tags;
		console.log('afTagsTypeahead valueOut', tagNames);
		return tagNames;
	}
});

Template.afTagsTypeahead.onRendered(function() {
	var options = {
/*         typeahead: {
					displayKey: 'title',
					valueKey: 'title',
					source: function(str) {
							return CloudspiderTags.find().map(function(tag){
									return tag.title;
							});
					}
			} */
	};

	//Extend tagsinput options
	if (this.data.atts && this.data.atts.tagsinput) {
		_.extend(options, this.data.atts.tagsinput);
	}

	//Add typeahead options if there are any
	if (this.data.atts && this.data.atts.typeahead) {
		options.typeahead = this.data.atts.typeahead;
	}

	this.$('input').tagsinput(options);
	this.$('input').attr('data-schema-key', this.data.atts['data-schema-key']);
});

