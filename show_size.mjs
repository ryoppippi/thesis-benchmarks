import tabularFilesizeGzip from 'tabular-filesize-gzip'

console.log(tabularFilesizeGzip([
  {
    title: 'Bundle size',
    groups: [
      {
        title: 'simpler schema',
        files: './dist/simpler/*',
      },
      {
        title: 'large schema',
        files: './dist/success/*',
      },
      // {
      //   title: 'Error files',
      //   files: './dist/error/*',
      // },
    ],
  },
]))
