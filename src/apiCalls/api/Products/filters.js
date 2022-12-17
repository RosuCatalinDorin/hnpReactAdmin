export const createElkFilters = (data, index, from, size) => {

    const a = {
        "query": {
            "bool": {
                "should": [
                    {"match": {"USER_DEFINED_EXTENSIONS.UDX_APPAREA": {"query": "Boring", "_name": "first"}}},
                    {"match": {"USER_DEFINED_EXTENSIONS.UDX_APPAREA": {"query": "Drilling", "_name": "first"}}}
                ]
            }
        }
    };

    let body = {
        "index": index,
        "body": {
            "query": {
                "bool": {
                    "must": [],
                },
            },
        },
        "from": from,
        "size": size,
    };
    if (data !== null) {
        const query = {
            "query": {
                "bool": {
                    "should": [],
                },
            },
        };
        data.UDX_APPAREA.forEach(value => {
            query.query.bool.should.push({"match": {"USER_DEFINED_EXTENSIONS.UDX_APPAREA": {"query": value}}})
        })
        body.body = query;
    }
    return body;
};