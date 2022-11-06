import { Layout } from "expo-router";
import { useAuth } from "./hooks/useAuth";

const Page = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Layout.Screen name="(main)" redirect={!user} />
      <Layout.Screen name="register" redirect={!!user} />
      <Layout.Children />
    </Layout>
  );
};

export default Page;
