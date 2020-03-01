/* exists-dir.js [ 01.03.2020 : 14:05:30 ] */

import { promises } from 'fs'


/**
 * Существование директории.
 * 
 * @memberof fs
 * @param {string}     path Путь.
 * @param {number} [mode=0] https://nodejs.org/api/fs.html#fs_file_access_constants.  
 *                            F_OK=0, R_OK=4, W_OK=2, X_OK=1.
 * @returns {boolean} 
 * @example
 * existsDir('./')
 * // => true
 */
async function existsDir(path, mode = 0) {
  try {
    await promises.access(path, mode)
    return (await promises.stat(path)).isDirectory()
  } catch {
    // TODO если не существует возвратит ошибку
    // ENOENT: no such file or directory, access 'c:/**/path'
  }
  return false
}


export default existsDir
