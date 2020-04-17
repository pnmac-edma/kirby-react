import React, { useRef } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { makeStyles } from '@material-ui/core/styles';
import color from '@edma/design-tokens/js/color';
import Splash from '../../../Presentational/Splash';
import AppBarContainer from '../AppBar/AppBar-Container';
import RequestsInboxContainer from '../../ViewRequests/RequestsInbox/RequestsInbox-Container';
import SearchContainer from '../Search/Search-Container';
import SearchResultsContainer from '../../SearchResults/SearchResults-Container';
import RequestAssetContainer from '../../RequestAssets/RequestAsset/RequestAsset-Container';
import SentRequestsContainer from '../../ViewRequests/SentRequests/SentRequests-Container';
import NewJob from '../../Hydration/NewJob/NewJob';
import ViewJobs from '../../Hydration/ViewJobs/ViewJobs';
import NewDestination from '../../Hydration/NewDestination/NewDestination.tsx';
import Governance from '../../Governance/Governance';
import Sensitivity from '../../Governance/SensitivityTable';

const pageContainerStyle = makeStyles(theme => ({
  pageContainer: {
    overflowY: 'scroll',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.type === 'light' ? color.g50 : color.g900,
    alignItems: 'stretch',
    width: `calc(100% - ${theme.spacing(7)}px)`,
    height: '100vh',
    color: theme.palette.type === 'light' ? color.black : color.white
  }
}));

const PageWrapper = ({ isSearchClicked, newJobName }) => {
  const classes = pageContainerStyle();
  const curPath = useLocation().pathname;
  const hydrationFormikRef = useRef(null);

  return (
    <div className={classes.pageContainer}>
      {curPath === '/hydration/new-job' ? (
        <AppBarContainer
          hydration
          jobName={newJobName}
          hydrationFormikRef={hydrationFormikRef}
        />
      ) : curPath === '/' ? (
        <AppBarContainer home />
      ) : (
        <AppBarContainer />
      )}

      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        {/* hosted version lands users at index.html */}
        <Route exact path="/index.html" component={Splash} />
        <Route exact path="/" component={Splash} />
        {/* search pages */}
        <Route path="/search/access" component={RequestAssetContainer} />
        <Route path="/search" component={SearchResultsContainer} />
        {/* hydration pages */}
        <Route path="/hydration/new-destination" component={NewDestination} />
        <Route
          path="/hydration/new-job"
          render={() => <NewJob hydrationFormikRef={hydrationFormikRef} />}
        />
        <Route path="/hydration/view-jobs" component={ViewJobs} />
        {/* requests pages */}
        <Route exact path="/requests" component={RequestsInboxContainer} />
        <Route path="/requests/archive" component={null} />
        <Route path="/requests/sent" component={SentRequestsContainer} />
        {/* Governors Pages */}
        <Route path="/governance/governors" component={Governance} />
        <Route path="/governance/sensitivity" component={Sensitivity} />
      </AnimatedSwitch>

      {isSearchClicked ? <SearchContainer /> : null}
    </div>
  );
};

export default PageWrapper;
