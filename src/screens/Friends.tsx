import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
  
type ItemProps = {firstName: string, lastName: string};

const Item = ({firstName, lastName}: ItemProps) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.title}>{firstName} {lastName}</Text>
    </TouchableOpacity>
);

function Friends() {

    const [users, setUsers] = useState([]);

    const getUser = async () => {
        try {
          const response = await axios.get('https://rnapp-mock-developer-edition.ap24.force.com/services/apexrest/apiservice');
        //   console.log(response.data);
        setUsers(response.data);
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        getUser();
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={users}
                renderItem={({item}) => <Item firstName={item.First_Name__c} lastName={item.Last_Name__c} />}
                keyExtractor={item => item.Id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    item: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#e6e6e6',
    },
    title: {
      fontSize: 18,
      color: '#212121',
      textTransform: 'capitalize',
    },
  });
 
export default Friends;