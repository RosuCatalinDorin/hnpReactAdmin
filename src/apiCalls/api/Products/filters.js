export const createElkFilters = (data) =>
{
    debugger;
    let body = {
        "index": "hnp-shop",
        "body": {
            "query": {
                "bool": {
                    "must": [],
                },
            },
        },
        "from": 0,
        "size": 16,
    };
    if(data !== null) {
        const query = {
            "query": {
                "bool": {
                    "should": [],
                },
            },
        };
        data.UDX_APPAREA.forEach(value => {
            query.query.bool.should.push({
                "term": {
                    "UDX_APPAREA": value
                },
            })
        })
        body.body = query;
    }
    console.log(body);
    return body;
};