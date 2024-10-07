/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function MoviesScreen(props: any): React.JSX.Element {
  const {children, screenTitle = ''} = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const imageHost = 'https://image.tmdb.org/t/p/w500';

  const fake_film_result = {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: '/dvBCdCohwWbsP5qAaglOXagDMtk.jpg',
        genre_ids: [28, 35, 878],
        id: 533535,
        original_language: 'en',
        original_title: 'Deadpool & Wolverine',
        overview:
          'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
        popularity: 4898.846,
        poster_path: '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
        release_date: '2024-07-24',
        title: 'Deadpool & Wolverine',
        video: false,
        vote_average: 7.752,
        vote_count: 3823,
      },
      {
        adult: false,
        backdrop_path: '/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg',
        genre_ids: [16, 10751, 35, 28],
        id: 519182,
        original_language: 'en',
        original_title: 'Despicable Me 4',
        overview:
          'Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.',
        popularity: 1821.154,
        poster_path: '/wWba3TaojhK7NdycRhoQpsG0FaH.jpg',
        release_date: '2024-06-20',
        title: 'Despicable Me 4',
        video: false,
        vote_average: 7.168,
        vote_count: 1853,
      },
      {
        adult: false,
        backdrop_path: '/reNf6GBzOe48l9WEnFOxXgW56Vg.jpg',
        genre_ids: [18, 80, 53],
        id: 889737,
        original_language: 'en',
        original_title: 'Joker: Folie à Deux',
        overview:
          "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
        popularity: 1661.893,
        poster_path: '/aciP8Km0waTLXEYf5ybFK5CSUxl.jpg',
        release_date: '2024-10-01',
        title: 'Joker: Folie à Deux',
        video: false,
        vote_average: 6.112,
        vote_count: 223,
      },
      {
        adult: false,
        backdrop_path: '/9R9Za5kybgl5AhuCNoK3gngaBdG.jpg',
        genre_ids: [27, 53],
        id: 1114513,
        original_language: 'en',
        original_title: 'Speak No Evil',
        overview:
          'When an American family is invited to spend the weekend at the idyllic country estate of a charming British family they befriended on vacation, what begins as a dream holiday soon warps into a snarled psychological nightmare.',
        popularity: 1615.186,
        poster_path: '/fDtkrO2OAF8LKQTdzYmu1Y7lCLB.jpg',
        release_date: '2024-09-11',
        title: 'Speak No Evil',
        video: false,
        vote_average: 7.22,
        vote_count: 384,
      },
      {
        adult: false,
        backdrop_path: '/Asg2UUwipAdE87MxtJy7SQo08XI.jpg',
        genre_ids: [28, 14, 27, 53, 80],
        id: 957452,
        original_language: 'en',
        original_title: 'The Crow',
        overview:
          'Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.',
        popularity: 1208.652,
        poster_path: '/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg',
        release_date: '2024-08-21',
        title: 'The Crow',
        video: false,
        vote_average: 5.473,
        vote_count: 473,
      },
      {
        adult: false,
        backdrop_path: '/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg',
        genre_ids: [16, 10751, 12, 35, 18],
        id: 1022789,
        original_language: 'en',
        original_title: 'Inside Out 2',
        overview:
          "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
        popularity: 1248.937,
        poster_path: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
        release_date: '2024-06-11',
        title: 'Inside Out 2',
        video: false,
        vote_average: 7.645,
        vote_count: 4086,
      },
      {
        adult: false,
        backdrop_path: '/gHpTqPqSIC0jZ4J4QyXlVJ0yBcW.jpg',
        genre_ids: [28, 80, 53],
        id: 1215162,
        original_language: 'en',
        original_title: "Kill 'em All 2",
        overview:
          "Phillip and Suzanne are retired from the spy game, living peacefully off the grid. That's until their whereabouts are discovered by Vlad, the vengeful brother of their target from the first film.",
        popularity: 1122.528,
        poster_path: '/hgA5hN3NjNNSTXYOmAI6KNKOzbp.jpg',
        release_date: '2024-09-24',
        title: "Kill 'em All 2",
        video: false,
        vote_average: 7.245,
        vote_count: 55,
      },
      {
        adult: false,
        backdrop_path: '/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg',
        genre_ids: [878, 27, 35],
        id: 933260,
        original_language: 'en',
        original_title: 'The Substance',
        overview:
          'A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.',
        popularity: 1036.091,
        poster_path: '/lqoMzCcZYEFK729d6qzt349fB4o.jpg',
        release_date: '2024-09-07',
        title: 'The Substance',
        video: false,
        vote_average: 7.401,
        vote_count: 217,
      },
      {
        adult: false,
        backdrop_path: '/zAqBIeO71BFL7bAtP5TFzVjVamy.jpg',
        genre_ids: [10749, 18],
        id: 1079091,
        original_language: 'en',
        original_title: 'It Ends with Us',
        overview:
          "When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended, and she realizes she must learn to rely on her own strength to make an impossible choice for her future.",
        popularity: 860.447,
        poster_path: '/cSMdFWmajaX4oUMLx7HEDI84GkP.jpg',
        release_date: '2024-08-07',
        title: 'It Ends with Us',
        video: false,
        vote_average: 6.997,
        vote_count: 652,
      },
      {
        adult: false,
        backdrop_path: '/NqqLef2ITlK8olXT4iFuUXFwSh.jpg',
        genre_ids: [9648, 53],
        id: 840705,
        original_language: 'en',
        original_title: 'Blink Twice',
        overview:
          'When tech billionaire Slater King meets cocktail waitress Frida at his fundraising gala, he invites her to join him and his friends on a dream vacation on his private island. But despite the epic setting, beautiful people, ever-flowing champagne, and late-night dance parties, Frida can sense that there’s something sinister hiding beneath the island’s lush façade.',
        popularity: 718.343,
        poster_path: '/lZGOK0I2DJSRlEPNOAFTSNxSjDD.jpg',
        release_date: '2024-08-21',
        title: 'Blink Twice',
        video: false,
        vote_average: 6.717,
        vote_count: 538,
      },
      {
        adult: false,
        backdrop_path: '/uXDwP5qPhuRyPpQ7WkLbE6t2z5W.jpg',
        genre_ids: [35, 53, 28],
        id: 877817,
        original_language: 'en',
        original_title: 'Wolfs',
        overview:
          "Hired to cover up a high-profile crime, a fixer soon finds his night spiralling out of control when he's forced to work with an unexpected counterpart.",
        popularity: 1158.234,
        poster_path: '/vOX1Zng472PC2KnS0B9nRfM8aaZ.jpg',
        release_date: '2024-09-20',
        title: 'Wolfs',
        video: false,
        vote_average: 6.613,
        vote_count: 315,
      },
      {
        adult: false,
        backdrop_path: '/A1dZ6faTjg0e6HYftBmEKujuXGQ.jpg',
        genre_ids: [35, 14, 27],
        id: 917496,
        original_language: 'en',
        original_title: 'Beetlejuice Beetlejuice',
        overview:
          "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Betelgeuse, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
        popularity: 777.192,
        poster_path: '/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg',
        release_date: '2024-09-04',
        title: 'Beetlejuice Beetlejuice',
        video: false,
        vote_average: 7.122,
        vote_count: 787,
      },
      {
        adult: false,
        backdrop_path: '/tncbMvfV0V07UZozXdBEq4Wu9HH.jpg',
        genre_ids: [28, 80, 53, 35],
        id: 573435,
        original_language: 'en',
        original_title: 'Bad Boys: Ride or Die',
        overview:
          'After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.',
        popularity: 716.814,
        poster_path: '/oGythE98MYleE6mZlGs5oBGkux1.jpg',
        release_date: '2024-06-05',
        title: 'Bad Boys: Ride or Die',
        video: false,
        vote_average: 7.547,
        vote_count: 2095,
      },
      {
        adult: false,
        backdrop_path: '/1pbV8uC6EUYOYnPqWfrQFPdAj1O.jpg',
        genre_ids: [80, 28, 53],
        id: 1147710,
        original_language: 'ko',
        original_title: '하이재킹',
        overview:
          'Pilots Tae-in and Gyu-sik are set to fly to Gimpo. Under the guidance of flight attendant Ok-soon, passengers are busy boarding. However, shortly after takeoff, a homemade bomb explodes, turning the cabin into chaos.',
        popularity: 686.378,
        poster_path: '/68jNkFi61MQjrJEqj2up5wZ4w5R.jpg',
        release_date: '2024-06-21',
        title: 'Hijack 1971',
        video: false,
        vote_average: 6.1,
        vote_count: 41,
      },
      {
        adult: false,
        backdrop_path: '/blqiNjJefmY10Wx6y2vgJJWljJj.jpg',
        genre_ids: [28, 53],
        id: 949484,
        original_language: 'en',
        original_title: 'Hounds of War',
        overview:
          'After a mission goes wrong, only one of a group of mercenaries is left alive to avenge his fallen brothers.',
        popularity: 679.169,
        poster_path: '/lRBT73EWsiQPuqK3YS3BnBW0Zwi.jpg',
        release_date: '2024-08-29',
        title: 'Hounds of War',
        video: false,
        vote_average: 6.4,
        vote_count: 66,
      },
      {
        adult: false,
        backdrop_path: '/mKOBdgaEFguADkJhfFslY7TYxIh.jpg',
        genre_ids: [28, 878, 35],
        id: 365177,
        original_language: 'en',
        original_title: 'Borderlands',
        overview:
          'Returning to her home planet, an infamous bounty hunter forms an unexpected alliance with a team of unlikely heroes. Together, they battle monsters and dangerous bandits to protect a young girl who holds the key to unimaginable power.',
        popularity: 593.181,
        poster_path: '/865DntZzOdX6rLMd405R0nFkLmL.jpg',
        release_date: '2024-08-07',
        title: 'Borderlands',
        video: false,
        vote_average: 5.875,
        vote_count: 637,
      },
      {
        adult: false,
        backdrop_path: '/fe5NMpbgZiYIYNpMBKqp9sbQ2Jy.jpg',
        genre_ids: [28, 53],
        id: 1024127,
        original_language: 'en',
        original_title: 'King of Killers',
        overview:
          "Garan is a part of a group of international hitmen who are contracted to take out the most dangerous killer in the world, only to find out that they're the ones being hunted.",
        popularity: 725.635,
        poster_path: '/x5AreOAgkTBzUSL58o4jsYortw2.jpg',
        release_date: '2023-09-01',
        title: 'King of Killers',
        video: false,
        vote_average: 6.5,
        vote_count: 120,
      },
      {
        adult: false,
        backdrop_path: '/4zlOPT9CrtIX05bBIkYxNZsm5zN.jpg',
        genre_ids: [16, 878, 10751],
        id: 1184918,
        original_language: 'en',
        original_title: 'The Wild Robot',
        overview:
          "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
        popularity: 677.808,
        poster_path: '/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg',
        release_date: '2024-09-12',
        title: 'The Wild Robot',
        video: false,
        vote_average: 8,
        vote_count: 93,
      },
      {
        adult: false,
        backdrop_path: '/vt37v6ouquokPYeEg3xqkzKjHRj.jpg',
        genre_ids: [53],
        id: 1248753,
        original_language: 'en',
        original_title: 'Amber Alert',
        overview:
          'An ordinary rideshare becomes a high-stakes game of cat and mouse when Jaq and Shane receive an alert of a child abduction on their phones. Quickly realizing they are behind a car that matches the description of the kidnapper’s, Jaq and Shane desperately race against time to save the child’s life.',
        popularity: 537.458,
        poster_path: '/vkrmJ2fStfnvsLfBw55nimnjcd5.jpg',
        release_date: '2024-09-27',
        title: 'Amber Alert',
        video: false,
        vote_average: 5.429,
        vote_count: 21,
      },
      {
        adult: false,
        backdrop_path: '/tCKWksaQI8XkAQLVou0AlGab5S6.jpg',
        genre_ids: [28, 878],
        id: 1144962,
        original_language: 'en',
        original_title: 'Transmorphers: Mech Beasts',
        overview:
          '20 years after the events of Transmorphers, a newer, more advanced species of alien robot descends on a rebuilt Earth, threatening once again to destroy the planet.',
        popularity: 739.557,
        poster_path: '/oqhaffnQqSzdLrYAQA5W4IdAoCX.jpg',
        release_date: '2023-06-09',
        title: 'Transmorphers: Mech Beasts',
        video: false,
        vote_average: 3.5,
        vote_count: 12,
      },
    ],
    total_pages: 46356,
    total_results: 927102,
  };

  function renderItem({item}: any) {
    return (
      <View
        key={`${item?.id}`}
        style={{alignItems: 'center', marginVertical: 24}}>
        <Image
          style={{width: '100%', aspectRatio: 1.5}}
          source={{uri: `${imageHost}/${item.poster_path}`}}
          resizeMode="contain"
        />
        <Section title={`Movie: ${item?.title}`}>
          <Text
            style={{
              textAlign: 'center',
            }}>{`Release Date: ${item?.release_date}`}</Text>
        </Section>
        <Text style={{textAlign: 'center'}}>{`========`}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle]}
        data={fake_film_result?.results?.slice(0, 5)}
        renderItem={renderItem}
        keyExtractor={item => `${item?.id}`}
        ListHeaderComponent={
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section
              title={
                screenTitle && screenTitle?.length > 0
                  ? screenTitle
                  : 'Movie List 2024'
              }
            />
          </View>
        }
        stickyHeaderIndices={[0]}
        ListFooterComponent={
          children && Object.keys(children).length > 0 ? <>{children}</> : <></>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MoviesScreen;
