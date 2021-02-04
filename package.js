Package.describe({
    name: 'ipstas:autoform-tags-typeahead',
    version: '0.8.0',
    summary: 'Provides a autoform tags input with typeahead functionality. 0.7.6 - bootstrap3, 0.8.0 - bootstrap4',
    git: 'https://github.com/ipstas/meteor-autoform-tags-typeahead',
    documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('2.0');

    api.use([
			'ecmascript',
			'mongo',
			'templating',
			'blaze',
			//'underscore',
			'aldeed:autoform@6.0.0',
			//'ajduke:bootstrap-tagsinput@0.7.1',
			//'sergeyt:typeahead@1.2.0',
    ]);

    api.mainModule('common/tag.js',['server', 'client']);
    api.mainModule('tags-typeahead.js','client');

    api.addFiles('tags-typeahead.css', 'client');

    //api.export(['TagsUtil', 'CloudspiderTags']);
});

// Npm.depends({
   // 'bootstrap4-tagsinput': '4.1.3'
// });

