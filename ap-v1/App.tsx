import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles-tela2';

const Tela2: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.sectionTitle}>Séries em Simulcast</Text>
      </View>
      <Text style={styles.subTitle}>Outono 2024</Text>

      <View style={styles.simulcastRow}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{ uri: 'https://a.storyblok.com/f/178900/960x1440/03713b3886/tower-of-gods-s2-key-visual.png/m/filters:quality(95)format(webp)' }}
            style={styles.simulcastImage}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{ uri: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/b5621ff1277ed6ad1006b0c6f14900bb.jpg' }}
            style={styles.simulcastImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.simulcastRow}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{ uri: 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg' }}
            style={styles.simulcastImage}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{ uri: 'https://cdn.myanimelist.net/images/anime/5/68097.jpg' }}
            style={styles.simulcastImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.simulcastRow}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{ uri: 'https://cdn.myanimelist.net/images/anime/11/39717.jpg' }}
            style={styles.simulcastImage}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{ uri: 'https://cdn.myanimelist.net/images/anime/1438/105106.jpg' }}
            style={styles.simulcastImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.simulcastRow}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{ uri: 'https://cdn.myanimelist.net/images/anime/1579/113812.jpg' }}
            style={styles.simulcastImage}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{ uri: 'https://cdn.myanimelist.net/images/anime/1500/139931.jpg' }}
            style={styles.simulcastImage}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Tela2;
