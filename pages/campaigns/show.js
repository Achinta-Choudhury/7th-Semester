import React, { Component } from 'react';
import { Card, Grid, Button, Icon, Segment, Header, Divider } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';
//import { GridColumn } from 'semantic-ui-react';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      candidateVoteCount1: summary[0],
      candidateVoteCount2: summary[1],
      candidateVoteCount3: summary[2],
      candidateName1: summary[3],
      candidateName2: summary[4],
      candidateName3: summary[5]
    };
  }

  renderCards() {
    const {
      candidateVoteCount1,
      candidateVoteCount2,
      candidateVoteCount3,
      candidateName1,
      candidateName2,
      candidateName3
    } = this.props;

    const items = [
      {
        image: 'https://bit.ly/3kQcPhj',
        header: `Total Votes: ${candidateVoteCount1}`,
        description: <h2>1. {candidateName1}</h2>,
        style: {overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1)'}
      },

      {
        image: 'https://bit.ly/3zwRgqa',
        header: `Total Votes: ${candidateVoteCount2}`,
        description: <h2>2. {candidateName2}</h2>,
        style: {overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1)'}
      },

      {
        image: 'https://bit.ly/3BLznpM',
        header: `Total Votes: ${candidateVoteCount3}`,
        description: <h2>3. {candidateName3}</h2>,
        style: {overflowWrap: 'break-word', backgroundColor: 'rgba(175, 210, 117, 1)'}
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <Divider horizontal>
          <Header as='h2'>
              <Icon name='tag' />
              Campaign Details
          </Header>
        </Divider>
        <Grid>
          <Grid.Column width={10}>
            {this.renderCards()}
          </Grid.Column>

          <Grid.Column width={6} divided>
            <Grid.Row>
              <Grid.Column>
                <Segment basic color='violet'>
                  <ContributeForm address={this.props.address} />
                </Segment>
                <Segment basic color='blue'>
                  <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>
                      <Button basic color='blue' icon labelPosition='left'>
                      <Icon name='eye'/>
                        View Requests</Button>
                    </a>
                  </Link>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>

        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
