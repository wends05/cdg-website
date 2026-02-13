import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f(
    {
      image: {
        /**
         * For full list of options and defaults, see the File Route API reference
         * @see https://docs.uploadthing.com/file-routes#route-config
         */
        maxFileSize: "64MB",
        maxFileCount: 1,
        minFileCount: 1,
      },
    },
    {
      awaitServerData: true,
    },
  )
    // Skipped the middleware for now
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      return { success: true, fileUrl: file.ufsUrl, name: file.name, key: file.key };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
