import { createSlice } from "@reduxjs/toolkit";
import GreenImg2 from "../Component/UserBar/widgets/widgetsImage/green-earth.png";
import { FaVideo } from "react-icons/fa";
import KindRegards from "../Images/signs/kind_regards.png";
import HappyHolidays from "../Images/signs/happy_holidays.png";
import BestRegards from "../Images/signs/best_regards.png";

const counterSlice = createSlice({
  name: "users",

  initialState: {
    facebookLink: "",
    stackoverflowLink: "",
    instagramLink: "",
    pinterestLink: "",
    linkedInLink: "",
    twitterLink: "",
    stackoverflowlink: "",
    youtubeSocial: "",
    youtubeLink: "",
    youtubeTitle: "",
    youtubeUrl: "",
    youtubeLinkdesc: "",
    twitterLinkA: "",
    twitterLinkB: "",
    twitterLinkC: "",
    disclaimer: "",
    greenMessage: "",
    greenMessageImage: GreenImg2,
    greenMessagePadding: {
      shape: 0,
      height: 0,
      marginTop: 0,
    },
    signOffImage: { name: "kind_regards", image: KindRegards },
    ctaButton: {
      text: "",
      url: "",
      type: "full",
      size: "large",
      color: "red",
      textColor: "text-white",
    },
    salesEvent: {
      saleTitle: "",
      saleText: "",
      salelink: "",
      saleColor: "",
      salesFontSize: 14,
    },
    salesEventImage: "",
    socialSettings: {
      minWidth: 100,
      height: 40,
      marginTop: 0,
    },
    videoConferenceInfo: {
      videoUrl: "",
      VideoIcon: FaVideo,
      videoText: "",
      shape: 0,
      height: 0,
      marginTop: 0,
    },
    bannerImg: "",
    bannerLink: "",

    // templateA initialState end

    // templateB initialState start

    // Users state
    // user: [],

    // Design Tabs
    counter: 1,

    // Design Color

    // colors: "",
    // FontsizeChange: "",
    // spacings: "",
    // Compactmargins: "",
    // imgSize: "",
    // imgShape: "",
    // images: "",
    // imgSize: "",

    // updatesignature modal

    updatesignature: false,

    // socialImages

    // socialImages: "trying a new image",
    socialimg: "",

    // social links
    socialcustemlink: "",
    customIcons: {
      id: 8,
      label: "example.com",
      image: "",
      onChange: "",
      onClick: "",
    },

    imageAnimation: "",
    imageAnimationDesign: "",
    imageVales: "",

    // Design

    // styleChangeA: "",
    // styleChangeB: "",
    // styleChangeC: "",

    // templateMenu
    allTemp: [],

    // sociallinks

    // socialfacebooklinks: "",
    // socialtwitterlinks: "",
    // sociallinkedInLinklinks: "",
    // socialinstalinks: "",
    // socialStackoverflowlinks: "",
    // socialYoutubelink: "",

    // widgets
    videoConferencebtn: "",
    videoConferencetext: "",

    // widgets

    signofftext: "",
    signofffontStyle: "",
    signoffColors: "",
    signofffontSize: "",
    videoconf: "",
    quoteTitle: "",
  },

  reducers: {
    // template A reducer start
    getctaButton: (state, action) => {
      state.ctaButton[action.payload.key] = action.payload.value;
    },
    getSalesEvent: (state, action) => {
      state.salesEvent[action.payload.key] = action.payload.value;
    },
    getSalesEventImage: (state, action) => {
      state.salesEventImage = action.payload.value;
    },
    getDisclaimer: (state, action) => {
      state.disclaimer = action.payload.value;
    },
    getBannerImg: (state, action) => {
      state.bannerImg = action.payload;
    },
    getBannerLink: (state, action) => {
      state.bannerLink = action.payload;
    },
    getGreenMessage: (state, action) => {
      state.greenMessage = action.payload.value;
    },
    getGreenMessageImage: (state, action) => {
      state.greenMessageImage = action.payload.value;
    },
    getGreenMessagePadding: (state, action) => {
      state.greenMessagePadding[action.payload.key] = action.payload.value;
    },
    getVideoConference: (state, action) => {
      state.videoConferenceInfo[action.payload.key] = action.payload.value;
    },
    getSocialSettings: (state, action) => {
      state.socialSettings[action.payload.key] = action.payload.value;
    },
    getName: (state, action) => {
      state.name = action.payload;
    },
    getCompany: (state, action) => {
      state.company = action.payload;
    },
    getPosition: (state, action) => {
      state.position = action.payload;
    },
    getPhonenumber: (state, action) => {
      state.phonenumber = action.payload;
    },
    getMobilenumber: (state, action) => {
      state.mobilenumber = action.payload;
    },

    getWebsite: (state, action) => {
      state.website = action.payload;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    getaddress: (state, action) => {
      state.address = action.payload;
    },
    getFacebookLink: (state, action) => {
      state.facebookLink = action.payload;
    },
    getstackoverflowLink: (state, action) => {
      state.stackoverflowLink = action.payload;
    },
    getinstagramLink: (state, action) => {
      state.instagramLink = action.payload;
    },
    getPinterestLink: (state, action) => {
      state.pinterestLink = action.payload;
    },
    getLinkedInLink: (state, action) => {
      state.linkedInLink = action.payload;
    },
    gettwitterLink: (state, action) => {
      state.twitterLink = action.payload;
    },
    getyoutubeLink: (state, action) => {
      state.youtubeLink = action.payload;
    },
    getYoutubeSocial: (state, action) => {
      state.youtubeSocial = action.payload;
    },
    getyoutubeTitle: (state, action) => {
      state.youtubeTitle = action.payload;
    },
    getyoutubeUrl: (state, action) => {
      state.youtubeUrl = action.payload;
    },
    getyoutubeLinkdesc: (state, action) => {
      state.youtubeLinkdesc = action.payload;
    },
    getquoteTitle: (state, action) => {
      state.quoteTitle = action.payload;
    },

    gettwitterLinkC: (state, action) => {
      state.twitterLinkC = action.payload;
    },
    getStackoverflowlink: (state, action) => {
      state.stackoverflowlink = action.payload;
    },
    getSocialYoutubelink: (state, action) => {
      state.socialYoutubelink = action.payload;
    },
    getSignOffImage: (state, action) => {
      console.log(action);
      state.signOffImage.name = action.payload;
      state.signOffImage.image = getImage(action.payload);
    },

    // template A reducer end
    getTemplateBName: (state, action) => {
      state.TemplateBName = action.payload;
    },
    getTemplateBCompany: (state, action) => {
      state.TemplateBCompany = action.payload;
    },
    getTemplateBPhonenumber: (state, action) => {
      state.TemplateBPhonenumber = action.payload;
    },
    getTemplateBPosition: (state, action) => {
      state.TemplateBPosition = action.payload;
    },

    // users reducer action

    // getData: (state, action) => {
    //   state.user = action.payload;
    // },

    //  design tab
    getCounts: (state, action) => {
      state.counter = action.payload;
    },

    getColors: (state, action) => {
      state.colors = action.payload;
    },
    getFontsizeChange: (state, action) => {
      state.FontsizeChange = action.payload;
    },

    getSpacing: (state, action) => {
      state.spacings = action.payload;
    },
    getCompactMargins: (state, action) => {
      state.Compactmargins = action.payload;
    },

    getImages: (state, action) => {
      state.images = action.payload;
    },
    getImgShape: (state, action) => {
      state.imgShape = action.payload;
    },
    getImgSize: (state, action) => {
      state.imgSize = action.payload;
    },
    getUpdatesignature: (state, action) => {
      state.updatesignature = action.payload;
    },

    // social icon images

    // getSocialImages: (state, action) => {
    //   state.socialImages = action.payload;
    // },
    getSocialCustemlink: (state, action) => {
      state.socialcustemlink = action.payload;
    },

    getCustomIcons: (state, action) => {
      state.customIcons = action.payload;
    },

    // imageAnimation

    getImageAnimation: (state, action) => {
      state.imageAnimation = action.payload;
    },
    getImageAnimationDesign: (state, action) => {
      state.imageAnimationDesign = action.payload;
    },
    getImageVales: (state, action) => {
      state.imageVales = action.payload;
    },

    // Design

    getStyleChangeA: (state, action) => {
      state.styleChangeA = action.payload;
    },
    getStyleChangeB: (state, action) => {
      state.styleChangeB = action.payload;
    },
    getStyleChangeC: (state, action) => {
      state.styleChangeC = action.payload;
    },

    // TemplateMenu

    getAllTemp: (state, action) => {
      state.allTemp = action.payload;
    },

    // sociallinks
    getSocialfacebooklinks: (state, action) => {
      state.socialfacebooklinks = action.payload;
    },
    getSocialtwitterlinks: (state, action) => {
      state.socialtwitterlinks = action.payload;
    },
    getSocialinstalinks: (state, action) => {
      state.socialinstalinks = action.payload;
    },
    getSociallinkedInLinklinks: (state, action) => {
      state.sociallinkedInLinklinks = action.payload;
    },
    getSocialStackoverflowlinks: (state, action) => {
      state.socialStackoverflowlinks = action.payload;
    },

    // video confress

    getvideoConferencebtn: (state, action) => {
      state.videoConferencebtn = action.payload;
    },
    getvideoConferencetext: (state, action) => {
      state.videoConferencetext = action.payload;
    },

    // wegites
    getSignofftext: (state, action) => {
      state.signofftext = action.payload;
    },
    getSignofffontStyle: (state, action) => {
      state.signofffontStyle = action.payload;
    },
    getSignoffColors: (state, action) => {
      state.signoffColors = action.payload;
    },
    getSignofffontSize: (state, action) => {
      state.signofffontSize = action.payload;
    },
    getVideoconf: (state, action) => {
      state.videoconf = action.payload;
    },
  },
});

export const {
  getBannerImg,
  getBannerLink,
  getVideoConference,
  getGreenMessageImage,
  getGreenMessage,
  getGreenMessagePadding,
  getctaButton,
  getDisclaimer,
  getFacebookLink,
  getstackoverflowLink,
  getinstagramLink,
  gettwitterLink,
  getyoutubeLink,
  getyoutubeLinkdesc,
  getYoutubeSocial,
  gettwitterLinkA,
  gettwitterLinkB,
  gettwitterLinkC,
  getyoutubeTitle,
  getyoutubeUrl,
  getquoteTitle,
  getLinkedInLink,
  getInstagramLink,
  getStackoverflowlink,
  getSocialYoutubelink,
  getPinterestLink,

  // template b values
  getTemplateBName,
  getTemplateBCompany,
  getTemplateBPhonenumber,
  getTemplateBPosition,
  getSignOffImage,

  // export for user
  // getData,

  // design tab

  getCounts,
  getColors,
  getFontsizeChange,
  getSpacing,
  getCompactMargins,
  getSocialSettings,

  // image in general tab
  getImages,
  getImgShape,
  getImgSize,

  // updatesignature
  getUpdatesignature,

  // social icon images

  // getSocialImages,
  // social icon lins

  getSocialCustemlink,
  getCustomIcons,

  // imageAnimation
  getImageAnimation,
  getImageAnimationDesign,
  getImageVales,

  // Design

  getStyleChangeA,
  getStyleChangeB,
  getStyleChangeC,

  // TemplateMenu
  allTemp,

  // sociallinks
  getSocialfacebooklinks,
  getSocialgooglelinks,
  getSociallinkedInLinklinks,
  getSocialtwitterlinks,
  getSocialStackoverflowlinks,
  getSocialinstalinks,

  // video confress
  getvideoConferencebtn,
  getvideoConferencetext,

  // widgets
  getSignofftext,
  getSignofffontStyle,
  getSignoffColors,
  getSignofffontSize,
  getVideoconf,
  //Sales event
  getSalesEvent,
  getSalesEventImage,
} = counterSlice.actions;

function getImage(name) {
  switch (name) {
    case "happy_holidays":
      return HappyHolidays;
    case "kind_regards":
      return KindRegards;
    case "best_regards":
      return BestRegards;
    default:
      return KindRegards;
  }
}

export default counterSlice.reducer;
