Package.describe({
    name: 'ipstas:autoform-tags-typeahead',
    version: '0.7.2',
    summary: 'Provides a autoform tags input with typeahead functionality',
    git: 'https://github.com/Redroest/meteor-autoform-tags-typeahead',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.3');

    api.use([
				'mongo',
        'ajduke:bootstrap-tagsinput',
        'mrt:bootstrap3-typeahead',
        'templating',
				'blaze',
				'underscore',
				'aldeed:autoform'
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

