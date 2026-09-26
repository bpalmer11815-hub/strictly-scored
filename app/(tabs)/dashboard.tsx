import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../../lib/auth-context';

export default function DashboardScreen() {
  const { profile, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Strictly Scored</Text>

      <Text style={styles.welcome}>
        Welcome{profile?.display_name ? `, ${profile.display_name}` : ''}
      </Text>

      <Text style={styles.role}>
        {profile?.role === 'judge' ? 'Judge' : 'Angler'}
      </Text>

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#16836f',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
