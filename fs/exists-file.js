/* exists-file.js [ 01.03.2020 : 14:43:55 ] */

import { promises } from 'fs'


/**
 * Существование файла.
 * 
 * @memberof fs
 * @param {string}     path Путь.
 * @param {number} [mode=0] https://nodejs.org/api/fs.html#fs_file_access_constants.  
 *                            F_OK=0, R_OK=4, W_OK=2, X_OK=1.
 * @returns {boolean} 
 * @example
 * existsFile('./fs/exists-file.js')
 * // => true
 */
async function existsFile(path, mode = 0) {
  try {
    await promises.access(path, mode)
    return (await promises.stat(path)).isFile()
  } catch {
    // empty
  }
  return false
}


export default existsFile
