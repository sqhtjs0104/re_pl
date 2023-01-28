const mybatisMapper = require('mybatis-mapper');
const logger = require('../../helper/LogHelper');
const DBPool = require('../../helper/DBPool');
const { RuntimeExeption } = require('../../helper/ExceptionHelper');

class MapService {
    constructor() {
        mybatisMapper.createMapper([
            './server/mapper/map/MapMapper.xml',
        ]);
    }

    async getList(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();
            let sql = mybatisMapper.getStatement('MapMapper', 'selectList', params);
            let [result] = await dbcon.query(sql);
            data = result;
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) dbcon.release();
        }

        return data;
    }

    async addBookmark(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();
            let sql = mybatisMapper.getStatement('MapMapper', 'selectUserBookmarkItem', params);
            let [result] = await dbcon.query(sql);

            if (result.length > 0) {
                return result;
            }

            sql = mybatisMapper.getStatement('MapMapper', 'insertBookmark', params);
            let [{ insertId, affectedRows }] = await dbcon.query(sql);

            if (affectedRows === 0) {
                throw new RuntimeExeption('북마크 추가에 실패했습니다.');
            }

            sql = mybatisMapper.getStatement('MapMapper', 'selectBookmark', {
                id: insertId
            });
            [result] = await dbcon.query(sql);

            data = result;
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) dbcon.release();
        }

        return data;
    }

    async getUserBookmarkList(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();
            let sql = mybatisMapper.getStatement('MapMapper', 'selectUserBookmarkList', params);
            let [result] = await dbcon.query(sql);
            data = result;
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) dbcon.release();
        }

        return data;
    }

    async getUserBookmarkItem(params) {
        let dbcon = null;
        let data = null;

        try {
            dbcon = await DBPool.getConnection();
            let sql = mybatisMapper.getStatement('MapMapper', 'selectUserBookmarkItem', params);
            let [result] = await dbcon.query(sql);
            data = result;
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) dbcon.release();
        }

        return data;
    }

    async deleteBookmark(params) {
        let dbcon = null;
        
        try {
            dbcon = await DBPool.getConnection();
            let sql = mybatisMapper.getStatement('MapMapper', 'deleteBookmark', params);
            
            let [{ affectedRows }] = await dbcon.query(sql);

            if (affectedRows === 0) {
                throw new RuntimeExeption('북마크 삭제에 실패했습니다.');
            }
        } catch (err) {
            throw err;
        } finally {
            if (dbcon) dbcon.release();
        }

        return [];
    }
}

module.exports = new MapService();