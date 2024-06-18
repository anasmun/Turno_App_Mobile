import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <TextInput
              style={styles.searchInput}
              placeholder="Buscar"
            />
        </View>   
      </View>
         
      <View style={styles.specialOffer}>
        <Text style={styles.specialOfferText}>25%</Text>
        <Text style={styles.specialOfferText}>Today's Special</Text>
        <Text style={styles.specialOfferText}>Get a discount for every service order!</Text>
        <Text style={styles.specialOfferText}>Only valid for today!</Text>
        <View style={styles.dotsContainer}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoryTitle}>Nuestras Categorías</Text>
        <View style={styles.categoriesGrid}>
          <View style={styles.categoryItem}>
           
            <Text style={styles.categoryText}>Categoría 1</Text>
          </View>
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>T</Text>
            <Text style={styles.categoryText}>Categoría 2</Text>
          </View>
          <View style={styles.categoryItem}>
            
            <Text style={styles.categoryText}>Categoría 3</Text>
          </View>
          <View style={styles.categoryItem}>
            
            <Text style={styles.categoryText}>Categoría 4</Text>
          </View>
          <View style={styles.categoryItem}>
            
            <Text style={styles.categoryText}>Categoría 5</Text>
          </View>
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>Ver más</Text>
          </View>
        </View>
      </View>
      <View style={styles.professionalsContainer}>
        <Text style={styles.categoryTitle}>Nuestros Profesionales</Text>
        <View style={styles.categoriesGrid}>
          <View style={styles.categoryItem}>
            
            <Text style={styles.categoryText}>Empleado 1</Text>
          </View>
          <View style={styles.categoryItem}>
            
            <Text style={styles.categoryText}>Empleado 2</Text>
          </View>
          <View style={styles.categoryItem}>
            
            <Text style={styles.categoryText}>Empleado 3</Text>
          </View>
          <View style={styles.categoryItem}>
            
            <Text style={styles.categoryText}>Empleado 4</Text>
          </View>
          <View style={styles.categoryItem}>
            
            <Text style={styles.categoryText}>Empleado 5</Text>
          </View>
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>Ver más</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerButton}>
          
        </View>
        <View style={styles.footerButton}>
          
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'relative',
    padding: 16,
    alignContent: 'center',
  },
  search: {
    width: 340,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 10,
  },
  specialOffer: {
    padding: 16,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
  },
  specialOfferText: {
    fontSize: 16,
    marginBottom: 8,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  categoriesContainer: {
    padding: 16,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '30%',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
  },
  professionalsContainer: {
    padding: 16,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
  },
  footerButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
});