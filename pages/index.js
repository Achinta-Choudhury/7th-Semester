import React, { Component } from 'react';
import { Divider, Button, Card,  Icon, Header, Grid, Image } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
      //const src = 'https://bit.ly/2TOvL56';
      //const src = "https://picsum.photos/400/60?random=1";    //random image generator
      const src = 'https://picsum.photos/id/192/400/60';  
      const items = this.props.campaigns.map(address => {
      return {
        // header: address,
        // description: (
        //   <Link route={`/campaigns/${address}`}>
        //     <a>View Campaign</a>
        //   </Link>
        // ),
        // fluid: true
        header: address, 
        image:{src},
        description: ( <Link route={`/campaigns/${address}`}>
        <a>View campaign</a>
        </Link>),
        color: 'red',
        fluid: true,
        style:{overflowWrap: 'break-word', backgroundColor: 'rgba(255, 214, 56, 1)'}
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        {/* <div>
          <h3>Open Campaigns</h3>

          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div> */}
        <Grid >
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src='https://bit.ly/3rmKu3t' />
                </Grid.Column>
                <Grid.Column width={13}>
                <p>Decentralized applications (dApps) are digital applications or programs that exist and run on a blockchain or P2P network of computers instead of a single computer, and are outside the purview and control of a single authority.</p>
                <p>A standard web app, such as Uber or Twitter, runs on a computer system which is owned and operated by an organization, giving it full authority over the app and its workings. There may be multiple users on one side, but the backend is controlled by a single organization. </p>
                <p>DApps can run on a P2P network or a blockchain network. For example, BitTorrent, Tor and Popcorn Time are applications that run on computers that are part of a P2P network, whereby multiple participants are consuming content, feeding or seeding content, or simultaneously performing both functions.</p>
                <p>In the context of cryptocurrencies, dApps run on a blockchain network in a public, open source, decentralized environment and are free from control and interference by any single authority.
                For example, a developer can create a Twitter-like dApp and put it on a blockchain where any user can publish messages. Once posted, no one—including the app creators—can delete the messages.</p>
                </Grid.Column>
            </Grid.Row>
            <Divider horizontal>
                <Header as='h2'>
                <Icon name='tag' />
                Open Campaigns
                </Header>
            </Divider>
            <Grid.Row>
                <Grid.Column width={13}>
                        {this.renderCampaigns()}
                </Grid.Column>
                <Grid.Column width={3}>
                    <Link route="/campaigns/new">
                        <a>
                        <Button floated="right" basic color='black' icon labelPosition='left'>
                        <Icon name='add circle' /> Create Campaign
                        </Button>
                        </a>
                    </Link>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignIndex;
