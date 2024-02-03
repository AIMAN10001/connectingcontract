import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { FaEthereum, FaUserAlt } from "react-icons/fa";

//INTERNAL IMPORT
import Style from "../styles/transferFunds.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from "../img";
import { Button, Loader } from "../components/componentsindex";

//IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const transferFunds = () => {
  const {
    currentAccount,
    accountBalance,
    transferEther,
    getAllTransactions,
    transactions,
    loading,
  } = useContext(NFTMarketplaceContext);
  const [transferAmount, setTransferAmount] = useState("");
  const [transferAccount, setTransferAccount] = useState("");
  const [message, setMessage] = useState("");
  const [readMessage, setReadMessage] = useState("");
  const [openBox, setOpenBox] = useState(false);

  useEffect(() => {
    getAllTransactions();
    // console.log(transactions);
  });
  return (
    <div className={Style.transfer}>
      <div className={Style.transfer_box}>
        <h1>Transfer Ether</h1>
        <p>
          Seamlessly send and receive Ethereum (ETH) with ease. Explore secure
          and efficient transactions within this dedicated platform, empowering
          you to manage your digital assets effortlessly.
        </p>
        <div className={Style.transfer_box_box}>
          <div className={Style.transfer_box_box_left}>
            <Image
              src={images.transfer1}
              alt="transfer"
              width={400}
              height={400}
            />
          </div>
          <div className={Style.transfer_box_box_right}>
            <h2>Transfer your ether❗</h2>
            <div className={Style.transfer_box_box_right_info}>
              <p className={Style.transfer_box_box_right_info_desktop}>
                Account: {currentAccount}
              </p>
              <p className={Style.transfer_box_box_right_info_mobile}>
                Account: {currentAccount.slice(1, 25)}...
              </p>
              <p>Ballance: {accountBalance} </p>
            </div>

            {/* //TRANSFER FIELD */}
            <div className={Style.transfer_box_box_right_box}>
              <div className={formStyle.Form_box_input}>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <FaUserAlt />
                  </div>
                  <input
                    type="text"
                    placeholder="address*"
                    onChange={(e) => setTransferAccount(e.target.value)}
                  />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <FaEthereum />
                  </div>
                  <input
                    type="number"
                    min={1}
                    placeholder="ETH*"
                    onChange={(e) => setTransferAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className={formStyle.Form_box_input}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Any transfer note (optional)"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {loading ? (
                <Loader />
              ) : (
                <Button
                  btnName="Transfer Funds"
                  handleClick={() =>
                    transferEther(transferAccount, transferAmount, message)
                  }
                  classStyle={Style.button}
                />
              )}
            </div>
          </div>
        </div>

        {/* //TRANSACTION HISTORY */}
        <h1 className={Style.transfer_box_h1}>Transaction History</h1>
        <p>
          Track your Ethereum (ETH) transactions, dscover log of your past
          transfers, gaining insights into dates, amounts, and involved parties.
          Stay informed about your financial activities.
        </p>
        <div className={Style.transfer_box_history}>
          {transactions.map((el, i) => (
            <div className={Style.transfer_box_history_item} key={i + 1}>
              <Image src={images.ethertransfer1} width={200} height={200} />
              <div className={Style.transfer_box_history_item_info}>
                <p>
                  {" "}
                  <span>Transfer ID:</span> #{i + 1}
                </p>
                <p>
                  <span>Amount:</span> {el.amount} ETH
                </p>
                <p>
                  <span>From:</span>
                  {el.addressFrom.slice(1, 12)}..
                </p>
                <p>
                  <span>To:</span> {el.addressTo.slice(1, 16)}..
                </p>
                <Button
                  btnName="Message"
                  handleClick={() => (
                    setReadMessage(el.message), setOpenBox(true)
                  )}
                  classStyle={Style.readButton}
                />
              </div>
            </div>
          ))}
        </div>
        {openBox == false ? (
          ""
        ) : (
          <div className={Style.messageBox} onClick={() => setOpenBox(false)}>
            <div className={Style.messageBox_box}>
              <h1>Transaction Message</h1>
              <p>{readMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default transferFunds;
