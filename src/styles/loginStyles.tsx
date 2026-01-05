import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  badges: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  styleBadge: {
    backgroundColor: '#FFFFFFAA',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontWeight: '700',
    marginRight: 8,
  },
  descBadge: {
    backgroundColor: '#8B5CF6',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1F2937',
  },

  header: {
    alignItems: 'center',
    marginBottom: 32,
  },

  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1F2937',
  },

  subText: {
    color: '#6B7280',
    marginTop: 4,
  },

  inputWrapper: {
    backgroundColor: '#f7faff',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 6,
    position: 'relative',
    width: '100%',
  },

  input: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#111827',
  },

  eyeButton: {
    position: 'absolute',
    right: 20,
    top: 18,
  },

  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
  },

  footer: {
    marginTop: 24,
    alignItems: 'center',
  },

  footerText: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  error: {
    fontSize: 12,
    color: 'red',
    width: '100%',
  },
});
