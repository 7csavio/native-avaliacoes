import React from 'react';
import { ScrollView, View, Text, Image, Pressable, Alert, Dimensions  } from 'react-native';
import styles from './styles-tela1';



const Tela1: React.FC = () => {
  const screenHeight = Dimensions.get('window').height;
  return (
    <ScrollView style={styles.container}>
      
      <View style={[styles.bannerContainer, { height: screenHeight / 2 }]}>
        <Image
          source={{ uri: 'https://a.storyblok.com/f/178900/1064x1494/68f1efaf40/seirei-gensouki-spirit-chronicles-season-2-teaser-visual.jpg/m/filters:quality(95)format(webp)' }}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>Seirei Gensouki 2</Text>
          <Text style={styles.rating}>A14 | Dub | Leg</Text>
          <Text style={styles.description}>
            Sua vida passada e presente estão entremeadas - um jovem com memórias de duas vidas
            distintas enfrenta seu destino! Rio perdeu a sua mãe quando ainda era jovem...
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.watchButton,
              { backgroundColor: pressed ? '#CC5200' : '#FF6600' },
            ]}
            onPress={() => Alert.alert('Assistir Agora')}
          >
            <Text style={styles.watchButtonText}>ASSISTIR AGORA</Text>
          </Pressable>
        </View>
      </View>


      <Text style={styles.sectionTitle}>Recomendações para Você</Text>
      <View style={styles.recommendationsContainer}>

        <View style={styles.row}>
          <Image source={{ uri: 'https://a.storyblok.com/f/178900/1000x1500/24c5857ad9/fairy-tail-100-years-quest-base-assets-2x3.png/m/filters:quality(95)format(webp)' }} style={styles.recommendationImage} />
          <Image source={{ uri: 'https://m.media-amazon.com/images/I/71DRngOUBAS._AC_UF894,1000_QL80_.jpg' }} style={styles.recommendationImage} />
          <Image source={{ uri: 'https://a.storyblok.com/f/178900/1064x1503/b5245a2097/re-zero-starting-life-in-another-world-season-3-key-visual-3.jpg/m/filters:quality(95)format(webp)' }} style={styles.recommendationImage} />
        </View>

        <View style={styles.row}>
          <Image source={{ uri: 'https://a.storyblok.com/f/178900/2000x3000/9127d8a874/overlordsacredkingdom_theatricalposters_us_2000x3000-2.jpg/m/filters:quality(95)format(webp)' }} style={styles.recommendationImage} />
          <Image source={{ uri: 'https://a.storyblok.com/f/178900/848x1200/dce908a594/bleach-thousand-year-blood-war-part-3-kv.jpg/m/filters:quality(95)format(webp)' }} style={styles.recommendationImage} />
          <Image source={{ uri: 'https://media.themoviedb.org/t/p/w500/bbDMqLJ42FG1chUxZneluO811Lk.jpg' }} style={styles.recommendationImage} />
        </View>

        <View style={styles.row}>
          <Image source={{ uri: 'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2024/04/The-Most-Notorious-Talker-Runs-the-Worlds-Greatest-Clan-anime-visual.jpg?resize=696%2C986&ssl=1' }} style={styles.recommendationImage} />
          <Image source={{ uri: 'https://cinema10.com.br/upload/series/series_2644_shiled_Easy-Resize.com.jpg' }} style={styles.recommendationImage} />
          <Image source={{ uri: 'https://a.storyblok.com/f/178900/960x1352/decd25056e/captain-tsubasa-staffel-2-die-junioren-jp-kv-2x3.jpg/m/filters:quality(95)format(webp)' }} style={styles.recommendationImage} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Tela1;
