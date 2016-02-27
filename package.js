Package.describe({
  name: "gsabran:pretty-email",
  summary: "Send pretty emails",
  version: "0.0.7",
  git: "https://github.com/yogiben/meteor-pretty-email"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use('coffeescript', 'server');
  api.use('email', 'server');
  api.use('underscore', 'server');
  api.use([
    'accounts-base',
    'accounts-password'
  ], 'server', { weak: true });
  api.use('cmather:handlebars-server@2.0.0', 'server');

  api.addFiles(
    [
      'lib/server/pretty-emails.coffee',
      'lib/templates/shared/footer.handlebars',
      'lib/templates/call-to-action.handlebars',
      'lib/templates/basic.handlebars'
    ],
    'server');

  api.export('PrettyEmail', 'server');
});
