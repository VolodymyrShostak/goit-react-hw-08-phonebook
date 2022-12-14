const styles = {
  container: {
    margin: 'auto',
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    backgroundColor:'#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    maxWidth: '90%',
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        We are glad to welcome you to the phonebook management service... Here
        you can safely save and edit all your contacts...{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
