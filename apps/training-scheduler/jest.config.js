module.exports = {
  name: 'training-scheduler',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/training-scheduler',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
