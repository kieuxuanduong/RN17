import {Assets} from 'react-native-ui-lib';

Assets.loadAssetsGroup('icons', {
  back: require('../assets/ic_back.png'),
  close: require('../assets/ic_close.png'),
  email: require('../assets/ic_email.png'),
  facebook: require('../assets/facebook-logo.png'),
  google: require('../assets/google-logo.png'),
  dontshow: require('../assets/dontshow.png'),
});
Assets.loadAssetsGroup('onboarding', {
  onboarding1: require('../assets/onboarding1.png'),
  onboarding2: require('../assets/onboarding2.png'),
  onboarding3: require('../assets/onboarding3.png'),
});
Assets.loadAssetsGroup('createAccount', {
  createAccount: require('../assets/img_create_account.png'),
});
Assets.loadAssetsGroup('news', {
  banner: require('../assets/img_banner.png'),
  bg: require('../assets/img_bg_news.png'),
});

Assets.loadAssetsGroup('icTab', {
  news: require('../assets/ic_news.png'),
  profile: require('../assets/ic_profile.png'),
  training: require('../assets/ic_training.png'),
  healthyTips: require('../assets/ic_healthytips.png'),
  goals: require('../assets/ic_goals.png'),
});
Assets.loadAssetsGroup('icHeader', {
  search: require('../assets/ic_search.png'),
  dots: require('../assets/ic_dots.png'),
});

Assets.loadAssetsGroup('imgWorkout', {
  imgWorkout1: require('../assets/home_page_section_banner.jpeg'),
  imgWorkout2: require('../assets/popular_banner.jpeg'),
  imgWorkout3: require('../assets/profile_banner.jpeg'),
  imgWorkout4: require('../assets/saq_banner_1920x850.jpeg'),
  imgWorkout5: require('../assets/wk_bg1.jpeg'),
  imgWorkout6: require('../assets/wk_bg2.jpeg'),
  imgWorkout7: require('../assets/wk_bg3.jpeg'),
  imgWorkout8: require('../assets/wk_bg4.jpeg'),
  imgWorkout9: require('../assets/workout_banner_1.jpeg'),
  imgWorkout10: require('../assets/workout_banner_2.jpeg'),
});

export default Assets;
