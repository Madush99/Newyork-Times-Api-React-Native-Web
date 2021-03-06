import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import {listMovies} from '../actions/movieActions';
import Loader from '../components/loader';
import Message from '../components/message';
import {logout} from '../actions/userActions';

const MovieScreen = () => {
  const dispatch = useDispatch();

  const movieList = useSelector(state => state.movieList);
  const {loading, error, movies} = movieList;

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text>
          <Message></Message>
        </Text>
      ) : (
        <>
          <View style={styles.container1}>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '30px',
                fontFamily: 'Cochin',
              }}>
              The New York Times
              <View style={[styles.row, styles.button]}>
                <Button
                  onPress={logoutHandler}
                  title="Log out"
                  color="#28609C"></Button>
                {/* //#387AC1 */}
              </View>
            </Text>
          </View>

          <View>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1159&q=80',
              }}
              style={[styles.imgCon]}
            />
            <Text
              style={{
                paddingTop: '30px',
                color: '#000000',
                fontWeight: 'bold',
                fontSize: '20px',
                fontFamily: 'Cochin',
                paddingLeft: '60px',
              }}>
              Movies
            </Text>
            <Text
              style={{
                paddingTop: '20px',
                color: '#000000',
                fontWeight: 'bold',
                fontSize: '40px',
                fontFamily: 'Cochin',
                paddingLeft: '60px',
              }}>
              Movie Reviews
            </Text>
            <Text
              style={{
                paddingTop: '5px',
                color: '#3C3C3C',
                fontSize: '15px',
                fontFamily: 'Cochin',
                paddingLeft: '60px',
                paddingBottom: '1px',
              }}>
              Our film critics on blockbusters, independents and everything in
              between.
            </Text>
            <Text
              style={{
                height: 2,
                backgroundColor: '#387AC1',
                marginLeft: 60,
              }}></Text>
            <Text style={{paddingBottom: '3px'}}></Text>
            <Text
              style={{
                height: 2,
                backgroundColor: '#387AC1',
                marginLeft: 60,
              }}></Text>
            <br />
            <br />
            {movies.length > 0 &&
              movies.map(movie => {
                const {
                  display_title,
                  headline,
                  mpaa_rating,
                  critics_pick,
                  byline,
                  multimedia,
                  link,
                  summary_short,
                  opening_date,
                  date_updated,
                  publication_date,
                } = movie;
                return (
                  <>
                    <movie key={display_title} />

                    <Card style={[styles.container]}>
                      <Card.Title
                        title={display_title}
                        subtitle={headline}
                        style={{marginLeft: '40px'}}
                      />
                      <Text style={{marginLeft: '60px', paddingBottom: '20px'}}>
                        Publication Date: {publication_date}
                      </Text>
                      <Card.Content style={[styles.content]}>
                        <Card.Cover
                          source={{uri: multimedia.src}}
                          style={{width: 500, height: 250, alignSelf: 'center'}}
                        />

                        <Title>
                          {critics_pick}| {mpaa_rating}
                        </Title>
                        <Paragraph>{summary_short}</Paragraph>
                        <Paragraph
                          style={{color: '#c0c0c0', paddingBottom: '10px'}}>
                          By: {byline}
                        </Paragraph>
                        <a
                          href={link.url}
                          style={{
                            paddingBottom: '15px',
                            width: 600,
                            alignSelf: 'center',
                          }}>
                          <Button
                            onPress={link.url}
                            title={link.suggested_link_text}
                            color="#051A44"></Button>
                        </a>
                      </Card.Content>
                    </Card>

                    <View
                      style={{
                        paddingBottom: '30px',
                        paddingTop: '20px',
                      }}></View>

                    {/* <View style={[styles.row, styles.container]}>
                          <Text>{display_title} </Text>
                          <Text>MAdish</Text>
                          <Image source={{ uri: 'https://wallpapercave.com/wp/wp3285541.jpg' }} style={{ width: 100, height: 100, }} />

                    </View> */}
                  </>
                );
              })}
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(239, 239, 244)',
    flex: 1,
    width: 900,
    alignSelf: 'center',
  },
  container1: {
    backgroundColor: '#3C3C3C',
    height: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingLeft: 1000,
  },
  content: {
    marginLeft: '40px',
    marginRight: '40px',
  },
  imgCon: {
    width: '100%',
    height: 500,
    paddingBottom: '40px',
  },
  showcase: {
    paddingTop: '20px',
    backgroundColor: '#3C3C3C',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '100px',
    height: '35px',
    fontSize: '20px',
    fontcolor: '#161314',
  },
  buttonText: {
    fontFamily: 'Cochin',
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default MovieScreen;
