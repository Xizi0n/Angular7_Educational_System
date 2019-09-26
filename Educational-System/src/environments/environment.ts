// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //BaseUrl: "http://167.86.98.54:4001",
  BaseUrl: "http://127.0.0.1:4001",
  CompilerUrl: "http://167.86.98.54:4000/compile",
  UploadImageUrl: "http://127.0.0.1:4002/uploadImage",
  BaseImageUrl: "http://127.0.0.1:4002/images/",
  UploadPdfUrl: "http://127.0.0.1:4003/uploadPdf",
  BasePdfUrl: "http://127.0.0.1:4003/pdf/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
