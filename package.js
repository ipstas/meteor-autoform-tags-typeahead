Package.describe({
    name: 'ipstas:autoform-tags-typeahead',
    version: '0.7.6',
    summary: 'Provides a autoform tags input with typeahead functionality',
    git: 'https://github.com/ipstas/meteor-autoform-tags-typeahead',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
			'mongo',
			'templating@1.3.0',
			'blaze@2.3.0',
			'underscore',
			'aldeed:autoform@6.0.0',
			'ajduke:bootstrap-tagsinput@0.7.1',
			//'sergeyt:typeahead@1.2.0',
    ]);

    api.addFiles([
			'common/tag.js',
    ], ['server', 'client']);

    api.addFiles([
			'tags-typeahead.html',
			'tags-typeahead.js',
			'tags-typeahead.css'
    ], 'client');

    api.export(['TagsUtil', 'CloudspiderTags']);
});

