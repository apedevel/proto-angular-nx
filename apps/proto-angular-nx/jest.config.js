module.exports = {
  name: 'proto-angular-nx',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/proto-angular-nx',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
