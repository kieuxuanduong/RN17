import Assets from '../../config/Assets';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import GradientText from '../../components/gradient-text';
import GradientButton from '../../components/gradient-button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFF',
  },
  imgProfile: {
    width: '100%',
    // height: 320,
  },
  details: {
    // height: screenHeight - 320,
    // marginBottom: 1000,
    // backgroundColor: 'red',
  },
  containerMemberStatus: {
    marginTop: 8,
    backgroundColor: 'rgba(254, 173, 29, 0.1)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 18.5,
    alignSelf: 'flex-start',
    marginLeft: 21,
  },
  txtMemberStatus: {
    color: 'rgba(254, 173, 29, 1)',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
  },
  profileNameBar: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 21,
    marginRight: 32,
  },
  txtProfileName: {
    color: '#09051C',
    fontSize: 27,
    fontWeight: '700',
    lineHeight: 35,
  },
  txtEmail: {
    color: 'rgba(59, 59, 59, 0.3)',
    marginLeft: 21,
    marginTop: 4,
    fontSize: 14,
    lineHeight: 21,
  },
  voucherBar: {
    flexDirection: 'row',
    elevation: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    // padding: 16,
    alignItems: 'center',
    borderRadius: 22,
    // height: 64,
  },
  icVoucher: {
    height: 43,
    width: 46,
    marginTop: 13,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  txtVoucher: {
    color: 'rgba(9, 5, 28, 1)',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
  },
  txtFavorite: {
    color: 'rgba(9, 5, 28, 1)',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    marginLeft: 34,
    marginTop: 20,
    marginBottom: 20,
  },
  containerFavoriteItem: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    elevation: 3,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    paddingLeft: 14,
    paddingRight: 17,
    paddingVertical: 20,
    borderRadius: 16,
    // marginBottom: 100,
    alignItems: 'center',
  },
  imgFavorite: {
    height: 62,
    width: 62,
  },
  containerFavoriteDetails: {
    marginLeft: 17.45,
    flex: 1,
  },
  txtTitleFavorite: {
    color: '#09051C',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
  },
  txtSubTitleFavorite: {
    color: 'rgba(59, 59, 59, 0.3)',
    fontSize: 14,
    lineHeight: 14,
    marginTop: 4,
    marginBottom: 8,
  },
  txtPrice: {
    fontSize: 19,
    fontWeight: '700',
    lineHeight: 25,
  },
  linearButton: {
    borderRadius: 17.5,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '700',
  },
});

const Profile = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Image style={styles.imgProfile} source={Assets.img_profile} />
        <ScrollView style={styles.container}>
          <View style={styles.details}>
            <View style={styles.containerMemberStatus}>
              <Text style={styles.txtMemberStatus}>Member Gold</Text>
            </View>
            <View>
              <View style={styles.profileNameBar}>
                <Text style={styles.txtProfileName}>Anam Wusono</Text>
                <Image source={Assets.ic_edit} />
              </View>
              <Text style={styles.txtEmail}>anamwp66@gmail.com</Text>
            </View>
            <View style={styles.voucherBar}>
              <Image style={styles.icVoucher} source={Assets.ic_voucher} />
              <Text style={styles.txtVoucher}>You Have 3 Voucher</Text>
            </View>
            <Text style={styles.txtFavorite}>Favorite</Text>

            <View style={styles.containerFavoriteItem}>
              <Image style={styles.imgFavorite} source={Assets.img_menu} />
              <View style={styles.containerFavoriteDetails}>
                <Text style={styles.txtTitleFavorite}>Spacy fresh crab</Text>
                <Text style={styles.txtSubTitleFavorite}>Waroenk kita</Text>
                <GradientText style={styles.txtPrice}>$ 35</GradientText>
              </View>

              {/* <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['rgba(83, 232, 139, 1)', 'rgba(21, 190, 119, 1)']}
                style={styles.linearButton}>
                <TouchableOpacity style={styles.btnBuy} onPress={() => {}}>
                  <Text style={styles.txtBtn}>Buy Again</Text>
                </TouchableOpacity>
              </LinearGradient> */}

              <GradientButton
                style={styles.linearButton}
                linearStyle={{borderRadius: 17.5}}>
                <Text style={styles.txtBtn}>Buy Again</Text>
              </GradientButton>
            </View>
          </View>

          <View style={{height: 110}} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
