// src/app/components/YoutubeVideosCR.jsx

import SectionHeading from "@/src/components/shared/SectionHeading";
import YoutubeCard from "./YoutubeCard";
import Button from "@/src/components/ui/Button";
import { fetchYoutubeVideos } from "@/src/lib/fetchYoutubeVideos";

export default async function YoutubeVideosCR() {
  const videos = await fetchYoutubeVideos();

  return (
    <div
      data-scroll-index="7"
      id="youtube"
      className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
        <SectionHeading
          title="YouTube"
          heading="Últimos"
          coloredHeading="Videos"
          description="Aquí encontrarás los videos más recientes que he publicado sobre SEO, freelancing y reflexiones del mundo digital."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <YoutubeCard key={video.id} video={video} />
          ))}
        </div>

        <div className="mt-10 text-center more-videos md:mt-13">
          <Button
            text="Visitar canal"
            href="https://www.youtube.com/@rusmadrigal"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}
