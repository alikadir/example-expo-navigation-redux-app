import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: "",
  urlList: [
    {
      title: "Haber Global",
      url: "https://tv.ensonhaber.com/tv/tr/haberglobal/index.m3u8",
    },
    { title: "TRT-1", url: "https://tv-trt1.medya.trt.com.tr/master.m3u8" },
    {
      title: "TRT Cocuk",
      url: "https://tv-trtcocuk.live.trt.com.tr/master.m3u8",
    },
    {
      title: "Kanal D",
      url: "https://kdlive.duhnet.tv/S2/HLS_LIVE/kanalddainp/playlist.m3u8",
    },
    {
      title: "TGRT",
      url: "https://b01c02nl.mediatriple.net/videoonlylive/mtsxxkzwwuqtglive/broadcast_5fe4598be8e5d.smil/playlist.m3u8",
    },
  ],
};

export const liveStreamSlice = createSlice({
  name: "liveStream",
  initialState,
  reducers: {
    changeUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { changeUrl } = liveStreamSlice.actions;

export default liveStreamSlice.reducer;
