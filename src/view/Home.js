import React, { useEffect } from "react";
import { connect } from "react-redux";
import actionsTypes from "../redux/Statistic/statisticAction";
import requests from "../utils/request";

import Logo from "../components/Header/Logo/Logo";
import Search from "../components/Header/Search/Search";
import InfoBox from "../components/Main/InfoBox/InfoBox";
import Spinner from "../components/Spinner/Spinner";
import ErrorModal from "../components/ErrorModal/ErrorModal";

import styles from "./Home.module.css";

function Home({
  countryList,
  loading,
  error,
  handleChangeError,
  handleChangeLoading,
  getDataToState,
}) {
  useEffect(() => {
    handleChangeLoading(true);
    countryList.length === 0 &&
      requests
        .getData()
        .then((obj) => getDataToState(obj.data.Countries))
        .catch((error) => handleChangeError(error))
        .finally(() => handleChangeLoading(false));
  }, [
    countryList.length,
    handleChangeError,
    handleChangeLoading,
    getDataToState,
  ]);

  return (
    <>
      {error && <ErrorModal errorText={error.message} />}
      <header>
        <div className={styles.wrapHeader}>
          <Logo />
          <Search />
        </div>
      </header>
      <main>
        <div className={styles.wrapMain}>
          <InfoBox />
          {loading && <Spinner />}
        </div>
      </main>
    </>
  );
}

let mapStateToProps = (state) => {
  return state.state;
};

let mapDispatchToProps = {
  getDataToState: actionsTypes.getState,
  handleChangeError: actionsTypes.error,
  handleChangeLoading: actionsTypes.loading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
