import CircularProgress from "@mui/material/CircularProgress";
export const Loading = () => {
    return (
      <div className="w-full h-96 flex justify-center items-center z-10">
        <CircularProgress />
      </div>
    );
};
