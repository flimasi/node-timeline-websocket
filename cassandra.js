/** @author Felipe de Lima **/

const cassandra = require('cassandra-driver');

/*
const client = new cassandra.Client({
    contactPoints: ['h1', 'h2'],
    localDataCenter: 'datacenter1',
    keyspace: 'ks1'
});

const query = 'SELECT content, id FROM feed WHERE key = ?';

client.execute(query, [ 'page' ])
      .then(result => console.log('Feed content %s', result.rows[0].content));*/
