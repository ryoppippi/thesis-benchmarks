import tabularFilesizeGzip from 'tabular-filesize-gzip'

console.log(tabularFilesizeGzip([
  {
    title: 'Bundle size',
    groups: [
      {
        title: 'Success files',
        files: './dist/success/*',
      },
      {
        title: 'Error files',
        files: './dist/error/*',
      }
    ],
  },
]))
