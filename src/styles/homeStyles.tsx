import { Dimensions, StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    alignItems: 'center',
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  logo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1F2937',
  },

  userMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationBtn: {
    marginRight: 16,
    position: 'relative',
  },

  notificationBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    position: 'absolute',
    top: 0,
    right: 0,
  },

  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#665eff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: '#FFF',
    fontWeight: '700',
  },

  heroSection: {
    backgroundColor: '#FFF',
    borderRadius: 28,
    padding: 24,
    marginBottom: 32,
    width: '100%',
  },

  greeting: {
    color: '#6B7280',
    fontSize: 14,
  },

  userName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1F2937',
    marginVertical: 6,
  },

  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  email: {
    color: '#6B7280',
    marginRight: 8,
  },

  logoutBtn: {
    backgroundColor: '#4F46E5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },

  logoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '800',
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(34, 197, 94, 0.2)',
  },

  verifiedText: {
    color: '#22c55e',
    fontSize: 12,
    fontWeight: '600',
  },
  heroImage: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').width * 0.75,
    borderRadius: 20,
    marginVertical: 20,
  },
});
