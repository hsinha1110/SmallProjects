import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { products } from './data';

interface Products {
  id: number;
  productId?: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity?: number;
}

const App = () => {
  const [cart, setCart] = useState<Products[]>([]);

  // Add to cart
  const addToCart = (item: Products) => {
    const newCart = {
      id: Date.now(),
      productId: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      quantity: 1,
    };

    setCart(cart => [...cart, newCart]);
  };

  // Check product is in cart
  const isInCart = (id: number) => {
    return cart.some(item => item.productId === id);
  };

  // Remove from cart
  const removeFromCart = (id: number) => {
    setCart(cart => cart.filter(item => item.productId !== id));
  };

  // Increment
  const handleIncrement = (productId: number) => {
    setCart(cart =>
      cart.map(item =>
        item.productId === productId
          ? {
              ...item,
              quantity: (item.quantity ?? 1) + 1,
            }
          : item,
      ),
    );
  };

  // Decrement
  const handleDecrement = (productId: number) => {
    setCart(cart =>
      cart.map(item =>
        item.productId === productId && (item.quantity ?? 1) > 1
          ? {
              ...item,
              quantity: (item.quantity ?? 1) - 1,
            }
          : item,
      ),
    );
  };

  // Product render
  const renderProductItem = ({ item }: { item: Products }) => {
    const added = isInCart(item.id);

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.productImage} />

        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>

          <Text style={styles.price}>₹{item.price}</Text>

          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.description}
          </Text>

          {added ? (
            <TouchableOpacity
              style={[styles.addButton, styles.removeButton]}
              onPress={() => removeFromCart(item.id)}
            >
              <Text style={styles.addButtonText}>Remove from Cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity ?? 1),
    0,
  );
  // Cart render
  const renderCartItem = ({ item }: { item: Products }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.productImage} />

        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>

          <Text style={styles.price}>₹{item.price}</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleDecrement(item.productId!)}
            >
              <Text style={styles.quantityButtonText}>−</Text>
            </TouchableOpacity>

            <Text style={styles.quantity}>{item.quantity}</Text>

            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleIncrement(item.productId!)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.itemTotal}>
            Total: ₹{item.price * (item.quantity ?? 1)}
          </Text>

          <TouchableOpacity
            style={[styles.addButton, styles.removeButton]}
            onPress={() => removeFromCart(item.productId!)}
          >
            <Text style={styles.addButtonText}>Remove from Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Products</Text>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartIcon}>🛒</Text>

          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Products */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <>
            {cart.length > 0 && <Text style={styles.cartTitle}>My Cart</Text>}

            <FlatList
              data={cart}
              renderItem={renderCartItem}
              keyExtractor={item => item.id.toString()}
              scrollEnabled={false}
            />
          </>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
  },

  cartButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  cartIcon: {
    fontSize: 27,
  },

  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },

  cartTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 5,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  productImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  content: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },

  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e53935',
    marginTop: 4,
  },

  description: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    marginTop: 5,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  quantity: {
    fontSize: 16,
    fontWeight: '700',
    marginHorizontal: 15,
  },

  itemTotal: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 8,
  },

  addButton: {
    backgroundColor: '#000',
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 7,
    alignSelf: 'flex-start',
    marginTop: 8,
  },

  removeButton: {
    backgroundColor: '#e53935',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default App;
