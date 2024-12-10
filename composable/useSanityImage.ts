import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import ImageUrlBuilder from "@sanity/image-url";

export default function () {
    const { projectId, dataset } = useSanity().client.config();
    const urlFor = (source: SanityImageSource) => 
        projectId && dataset
            ? ImageUrlBuilder({ projectId, dataset }).image(source)
            : null;
    return {urlFor}
}