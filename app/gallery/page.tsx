import Image from "next/image";
import { galleryImages } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Product Gallery",
  "Gallery of Vidyut Enterprise earthing, copper, GI, cable tray and lightning protection products.",
  "/gallery"
);

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Gallery</div>
          <h1>Product gallery</h1>
          <p className="lead">Visual catalog for industrial electrical and earthing product enquiries.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid three">
            {galleryImages.map((src, index) => (
              <div className="card product-image" key={src}>
                <Image src={src} alt={`Vidyut Enterprise product ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
