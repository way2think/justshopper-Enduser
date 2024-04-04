import React from "react";
import "./Cod.css";
import { useGetSettingsQuery } from "../../api/api";

const Cod = () => {
  const { data: settings, isLoading, isFetching } = useGetSettingsQuery();

  console.log(
    "settings: ",
    settings,
    isLoading,
    isFetching,
    settings?.enduser_status_message
  );

  return (
    <>
      {settings?.enduser_status_message && (
        <div className="cod">
          <p className="time">{settings?.enduser_status_message}</p>
        </div>
      )}
    </>
  );
};

export default Cod;
