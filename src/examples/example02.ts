export interface TVideo {
  hosted: {
    videoUrl: string;
  };
  served: {
    mp4Url: string;
    oggUrl: string;
    webMUrl: string;
  };
  videoTitle: string;
}

export const video: TVideo = {
  hosted: {
    videoUrl: null,
  },
  served: {
    mp4Url: null,
    oggUrl: null,
    webMUrl: null,
  },
  videoTitle: null,
};

function Video1({ hosted, served, videoTitle }: TVideo = video) {}

function Video2({
  hosted = { videoUrl: "" },
  served = {
    mp4Url: null,
    oggUrl: null,
    webMUrl: null,
  },
  videoTitle = "",
}: TVideo) {}
