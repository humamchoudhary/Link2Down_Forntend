import Layout from "@/components/layout";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { URL } from "./_app";

export default function Home() {
  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState();
  const router = useRouter();
  useEffect(() => {
    if (details) {
      router.push({
        pathname: `/${details["endpoint"]}`,
        query: { url: url },
      });
    }
  }, [details]);

  function getData() {
    setLoadingData(true);
    setError();
    axios
      .get(`${URL}/homelink?url=${url}`)
      .then((response) => {
        setDetails(response.data);
        setLoadingData(false);
      })
      .catch((error) => {
        setError(true);
        setLoadingData(false);
      });
  }

  return (
    <>
      <Head>
        <title>All Downloader | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <div className="border-yt border-2 rounded-md px-4 py-40 flex flex-col justify-center items-center gap-8 duration-300 transition-all">
          <h1 className="font-bold font-sans text-center">
            Download Video and Audio from Youtube or Instagram
          </h1>
          {error && <p className=" text-red-500">An Error Occured</p>}
          <div className="flex flex-row gap-2 border-2  2xl:w-4/5 border-yt rounded-md">
            <input
              className="bg-transparent w-4/5 2xl:w-11/12 focus:outline-none focus:text-yt active:outline-none px-4"
              placeholder="Paste your link here"
              value={url}
              onChange={(val) => setUrl(val.target.value)}
            />
            <div
              className="bg-yt  px-5 text-bg font-medium py-4 hover:cursor-pointer "
              onClick={() => getData()}
            >
              Download
            </div>
          </div>
          {loadingData && (
            <div class="">
              <div class="load-3">
                <div className="bg-yt line"></div>
                <div className="bg-yt line"></div>
                <div className="bg-yt line"></div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Free Online Videos Downloader
          </h2>
          <p className="mb-8">
            Looking for a hassle-free way to download videos from your favorite
            platforms? Look no further! Welcome to our website, the ultimate
            free online videos downloader. With our powerful tool, you can
            easily save videos from popular platforms such as YouTube, Facebook,
            TikTok, Reddit, Instagram, Soundcloud, Dailymotion, Twitter, Vimeo
            Video, Bilibili Video, and more. Experience the convenience of
            having your favorite videos available offline, whenever and wherever
            you want.
          </p>
          <h3 className="text-xl font-bold mb-6">
            Want to be a video and photo ninja? Learn the art of downloading
            with Link2Down!
          </h3>
          <ol className="list-none px-6 mb-8">
            <li>
              <strong>Step 1 |</strong> Copy the video link from the platform
              where the video is hosted. Images will be added here later
              tonight. Under creation on Canva
            </li>
            <li>
              <strong>Step 2 |</strong> Paste the link above and click
              "Download" to process the link. Images will be added here later
              tonight. Under creation on Canva
            </li>
            <li>
              <strong>Step 3 |</strong> Choose any of the high resolutions from
              HD, FHD, Ultra HD, 4k, 2160p, 1440p, 1080p, 720p, 480p, 360p,
              240p, 144p, or MP3 format, and the download will start
              automatically. Images will be added here later tonight. Under
              creation on Canva
            </li>
          </ol>
          <h3 className="text-xl text-center font-bold mb-8">
            Platform Support
          </h3>
          <p className="mb-8">
            Window, Android, iOS, macOS, Linux, Ubuntu, Chrome, Web Browsers,
            Smart TVs, Streaming Devices
          </p>
          <h3 className="text-xl text-center font-bold mb-8">
            Free Link2Down Features
          </h3>
          <div className="flex flex-wrap justify-center gap-10 mb-12">
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4 py-4 border-2 border-yt rounded-lg">
              <p className="text-center py-1">Unlimited downloads</p>
              <p className="text-center py-1">12k, 8K, 4k Free Downloader</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-1 py-4 border-2 border-yt rounded-lg">
              <p className="text-center py-1">1000+ Supported Websites</p>
              <p className="text-center py-1">YouTube Private Videos</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-1 py-6 border-2 border-yt rounded-lg">
              <p className="text-center py-1">Full Playlists</p>
              <p className="text-center py-1">Trim Videos</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-1 py-6 border-2 border-yt rounded-lg">
              <p className="text-center py-1">100% Secure</p>
              <p className="text-center py-1">50+ Format Support</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-1 py-4 border-2 border-yt rounded-lg">
              <p className="text-center py-1">No Credit Card Required</p>
              <p className="text-center py-1">24x7 Support</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4 px-1 py-6 border-2 border-yt rounded-lg  ">
              <p className="text-center py-1">100% Free Downloader</p>
              <p className="text-center py-1">30+ Language Support</p>
            </div>
          </div>
          <h3 className="text-xl text-center font-bold mb-8">
            Link2Down Video, Audio 50+ Format Support
          </h3>
          <div className="mb-8">
            <h4 className="text-lg font-bold mb-2">Video Formats:</h4>
            <span className="font-semibold">Crisp and stunning:</span> MP4 in
            8K, 4K, 1440p, 1080p, 720p, 480p, 360p, 240p, and 144p
            <br />
            <span className="font-semibold">Elevate your visuals:</span> WEBM in
            8K, 4K, 1440p, 1080p, 720p, and 480p
            <br />
            <span className="font-semibold">Immersive HDR:</span> High Dynamic
            Range Videos
            <br />
            <span className="font-semibold">Silky smooth motion:</span> 30FPS
            and 60FPS options
            <br />
            <br />
            <h4 className="text-lg font-bold mb-2">Audio Formats:</h4>
            <span className="font-semibold">Mesmerizing soundtracks:</span> MP3,
            M4A, WEBM, WAV, AAC, OPUS, FLAC, and OGG
            <br />
            <br />
            <br />
            <strong>
              <em>
                And that's not all! We've got you covered with additional
                popular video formats:
              </em>
            </strong>
            <br />
            AVI, MKV, MOV, WMV, 3GP, FLV, VOB, SWF, MPG, M2V, DIVX
            <br />
          </div>
          <p className="mb-12">
            Unlock the true potential of your media library with Link2Down. Get
            ready to dive into an extraordinary world of video and audio
            possibilities, all at one click 😊
          </p>
          <h3 className="text-xl text-center font-bold mb-8">
            Link2Down User FAQ’s
          </h3>
          <ol className="list-disc px-6 mb-8">
            <li className="mb-7 ">
              <strong>
                <em>Is Link2Down free to use?</em>
              </strong>
              <br />
              Yes, Link2Down is completely free to use. You can access all its
              features without any cost or subscription requirements.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>
                  Can I download videos in different resolutions using
                  Link2Down?
                </em>
              </strong>
              <br />
              Yes, Link2Down offers a variety of resolution options for video
              downloads. You can choose from resolutions like 4K, 1080p, 720p,
              and more, depending on the original quality of the video on the
              respective platform.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>Does Link2Down support audio-only downloads?</em>
              </strong>
              <br />
              Yes, Link2Down supports audio-only downloads. You can extract the
              audio from videos and download them in popular audio formats such
              as MP3, M4A, and more.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>
                  Are there any limitations on the number of downloads with
                  Link2Down?
                </em>
              </strong>
              <br />
              No, there are no limitations on the number of downloads with
              Link2Down. You can use the tool to download as many videos as you
              want, without any restrictions.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>Is Link2Down safe and secure to use?</em>
              </strong>
              <br />
              Yes, Link2Down prioritizes user safety and security. We ensure the
              privacy of your downloads and do not store any copies of the
              downloaded videos or other media.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>
                  How long does it take to download a video using Link2Down?
                </em>
              </strong>
              <br />
              The download speed may vary depending on factors like your
              internet connection and the size of the video. However, Link2Down
              strives to provide fast and efficient downloads, allowing you to
              save videos in a timely manner.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>Can I convert YouTube videos to MP3 using Link2Down?</em>
              </strong>
              <br />
              Yes, you can convert YouTube videos to MP3 format using Link2Down.
              This allows you to enjoy the audio content separately or create
              your own music collection.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>Does Link2Down require any software installation?</em>
              </strong>
              <br />
              No, Link2Down is an online tool that does not require any software
              installation. You can access it directly through your web browser.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>
                  Can I download subtitles along with the video using Link2Down?
                </em>
              </strong>
              <br />
              Currently, Link2Down focuses on video and audio downloads and does
              not support downloading subtitles. We are currently working on
              adding this feature soon.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>
                  Is there a size limit for the videos that can be downloaded
                  with Link2Down?
                </em>
              </strong>
              <br />
              Link2Down supports downloading videos of various sizes. However,
              extremely large video files may take longer to download and may
              require a stable and robust internet connection.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>Can I resume interrupted downloads with Link2Down?</em>
              </strong>
              <br />
              Yes, Link2Down does have a resume feature for interrupted
              downloads. Sometimes the download gets interrupted for that you
              will need to restart the download.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>Is it legal to download videos using Link2Down?</em>
              </strong>
              <br />
              Downloading videos for personal use is generally considered
              permissible under fair use policies. However, it's essential to
              respect copyright laws and terms of service of the platforms you
              are downloading from. Link2Down is designed for personal use only,
              and we encourage users to comply with applicable laws and
              regulations.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>
                  Are there any limitations on video duration for downloads?
                </em>
              </strong>
              <br />
              Link2Down does not impose any specific limitations on video
              duration. However, longer videos may take more time to process and
              download, depending on your internet connection speed and the size
              of the video file.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>Can I share or distribute the downloaded videos?</em>
              </strong>
              <br />
              The downloaded videos are for personal use only. Sharing or
              distributing copyrighted content without proper authorization may
              infringe upon the rights of the content creators. It's important
              to respect copyright laws and terms of service.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>
                  What should I do if a video download fails or encounters an
                  error?
                </em>
              </strong>
              <br />
              If you encounter any issues with video downloads, please ensure
              that you have a stable internet connection and try again. If the
              problem persists, it could be due to limitations set by the video
              platform or temporary technical issues. Feel free to reach out to
              our support team for assistance.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>
                  Can I download videos from live streaming platforms or
                  real-time content?
                </em>
              </strong>
              <br />
              Link2Down is primarily designed for downloading pre-recorded
              videos. Live streaming platforms or real-time content may not be
              supported for downloads. But after the live stream ended & the
              video get saved or made public to view the stream again. It comes
              under recorded category & you can download that stream video.
            </li>
            <li className="mb-7 ">
              <strong>
                <em>How can I report a technical issue or provide feedback?</em>
              </strong>
              <br />
              If you encounter any technical issues or have suggestions for
              improvement, we value your feedback. You can reach out to our
              support team through the contact information provided on our
              website. We appreciate your input and strive to enhance the user
              experience.
            </li>
          </ol>
        </div>
      </Layout>
    </>
  );
}
