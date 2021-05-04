module.exports = function Test(router) {
    router.get('/', (req, res) => {
        const data = {
            text: 'Test'
        };
        const err = {};
        return res.json({ data, err });
    })
   return router;
}