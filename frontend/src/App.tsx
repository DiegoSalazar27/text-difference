import { useQuery } from "@tanstack/react-query";
import { getJson } from "./datasource/requestFile";
import { useToast } from "./hooks/use-toast";
import TextCard from "./components/textCard";

function App() {
  // Also I can use the fetch inside some useEffect but I like useQuery and it's a light package
  const { data, isLoading, error } = useQuery({
    queryKey: ["json"],
    queryFn: getJson,
  });

  const { toast } = useToast();

  // Some toast to show errors
  if (error) {
    toast({
      title: "Error: Failed to fetch data",
      description: error.message,
      variant: "destructive",
    });
  }

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Text Comparison</h1>
      <div className="flex flex-col md:flex-row gap-4">
        {isLoading ? <p>Loading...</p> : data && <TextCard {...data} />}
      </div>
    </div>
  );
}

export default App;
