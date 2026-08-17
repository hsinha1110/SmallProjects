import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#222222',
    marginTop: 15,
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 5,
    marginBottom: 24,
  },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 18,
    backgroundColor: '#F7F4FF',
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5B32D6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontSize: 19,
    fontWeight: '700',
    color: '#222222',
  },

  email: {
    fontSize: 13,
    color: '#888888',
    marginTop: 4,
  },

  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#222222',
    marginTop: 28,
    marginBottom: 12,
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 10,
  },

  statCard: {
    flex: 1,
    paddingVertical: 18,
    borderRadius: 14,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },

  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#5B32D6',
  },

  statLabel: {
    fontSize: 12,
    color: '#888888',
    marginTop: 5,
  },

  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    overflow: 'hidden',
  },

  menuItem: {
    minHeight: 64,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  lastMenuItem: {
    borderBottomWidth: 0,
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F3EFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuText: {
    marginLeft: 13,
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
  },

  version: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 12,
    color: '#AAAAAA',
  },
  summaryCard: {
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#F8F6FF',
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },

  summaryLabel: {
    fontSize: 14,
    color: '#666666',
  },

  summaryValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#5B32D6',
  },
});

export default styles;
